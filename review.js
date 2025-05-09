import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { diffWords } from 'diff';

dotenv.config(); // Load API key from .env

const BLOG_DIR = './posts'; // Blog posts directory
const REVIEW_DIR = './posts/ai-reviews'; // AI reviews directory
const UPDATE_DIR = './posts/ai-updates'; // AI-generated updates directory
const DIFF_DIR = './posts/ai-diffs'; // AI-generated diffs directory
const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // API Key from .env

if (!OPENAI_API_KEY) {
    console.error("Error: Missing OpenAI API key. Add it to a .env file.");
    process.exit(1);
}

// Ensure necessary directories exist
[REVIEW_DIR, UPDATE_DIR, DIFF_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Function to fetch AI-generated reviews
async function reviewContent(content) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4-turbo",
            messages: [
                { role: "system", content: "You are an expert blog editor. Review the provided blog post and suggest improvements for clarity, engagement, and SEO. Provide detailed suggestions in structured sections." },
                { role: "user", content: content }
            ],
            max_tokens: 1000
        })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
}

// Function to generate an updated blog post based on the review
async function generateUpdatedPost(originalContent, reviewContent) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4-turbo",
            messages: [
                { role: "system", content: "You are an expert blog editor. Using the review feedback, rewrite the blog post to improve clarity, engagement, and SEO while preserving the original style." },
                { role: "user", content: `Here is the review feedback:\n\n${reviewContent}\n\nHere is the original blog post:\n\n${originalContent}\n\nPlease generate an improved version.` }
            ],
            max_tokens: 1500
        })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
}

// Function to generate a diff between the original and updated post
function generateDiff(originalText, updatedText) {
    const diff = diffWords(originalText, updatedText);
    return diff.map(part => {
        const color = part.added ? '**(ADDED)** ' :
                     part.removed ? '**(REMOVED)** ' : '';
        return `${color}${part.value}`;
    }).join('');
}

// Process each Markdown blog post
async function processFiles() {
    const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith(".md"));

    for (const file of files) {
        const filePath = path.join(BLOG_DIR, file);
        const reviewFilePath = path.join(REVIEW_DIR, `review-${file}`);
        const updateFilePath = path.join(UPDATE_DIR, `update-${file}`);
        const diffFilePath = path.join(DIFF_DIR, `diff-${file}`);

        const originalContent = fs.readFileSync(filePath, "utf8");

        console.log(`Reviewing: ${file}`);
        const reviewText = await reviewContent(originalContent);

        if (reviewText.split(" ").length < 100) {  // Ensure the review is complete
            console.warn(`Warning: Review for ${file} seems incomplete. Skipping update.`);
            continue;
        }

        fs.writeFileSync(reviewFilePath, `# AI Review for ${file}\n\n${reviewText}\n`, "utf8");
        console.log(`Review saved: ${reviewFilePath}`);

        console.log(`Generating update for: ${file}`);
        const updatedText = await generateUpdatedPost(originalContent, reviewText);
        fs.writeFileSync(updateFilePath, `# Updated Blog Post for ${file}\n\n${updatedText}\n`, "utf8");
        console.log(`Updated post saved: ${updateFilePath}`);

        console.log(`Generating diff for: ${file}`);
        const diffText = generateDiff(originalContent, updatedText);
        fs.writeFileSync(diffFilePath, `# Differences in ${file}\n\n${diffText}\n`, "utf8");
        console.log(`Diff saved: ${diffFilePath}`);
    }
}

processFiles();