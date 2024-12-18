# Testing Practices Cheat Sheet

## Testing Libraries and Frameworks

- Jest: Primary testing framework
- Mockito: Mocking library for Java
- PowerMock: Extended mocking capabilities

## Mocking and Stubbing Strategies

### Jest Mocks

```javascript
jest.mock('module-name');
const mockedFunction = jest.fn();
```

### Mockito Mocks

```java
@Mock
private DependencyClass mockDependency;

when(mockDependency.method()).thenReturn(expectedValue);
```

### PowerMock for Static Methods

```java
@RunWith(PowerMockRunner.class)
@PrepareForTest(StaticClass.class)
public class TestClass {
    @Test
    public void testStaticMethod() {
        PowerMockito.mockStatic(StaticClass.class);
        when(StaticClass.staticMethod()).thenReturn(expectedValue);
    }
}
```

## Fake Implementations

### In-Memory Repositories

```java
public class InMemoryUserRepository implements UserRepository {
    private Map<String, User> users = new HashMap<>();

    @Override
    public User findById(String id) {
        return users.get(id);
    }

    // Other methods...
}
```

### Test Doubles

```java
public class TestDataSource implements DataSource {
    private List<String> data = new ArrayList<>();

    @Override
    public String fetchData() {
        return data.remove(0);
    }

    public void addTestData(String item) {
        data.add(item);
    }
}
```

## Test Structure

- Use descriptive test names (e.g., `should_return_user_when_valid_id_provided`)
- Follow Arrange-Act-Assert (AAA) pattern
- Group related tests in nested classes or describe blocks

## Test Coverage

- Aim for high test coverage (e.g., 80% or higher)
- Use code coverage tools to identify untested areas

## Parameterized Tests

```java
@ParameterizedTest
@CsvSource({"1, true", "2, false", "3, true"})
void isOdd_ShouldReturnCorrectResult(int input, boolean expected) {
    assertEquals(expected, NumberUtils.isOdd(input));
}
```

## Test Data Management

- Use `@BeforeEach` or `beforeEach()` for test setup
- Use `@AfterEach` or `afterEach()` for test teardown
- Utilize test factories or builders for complex objects

## Assertion Strategies

- Use assertThat() for more readable assertions
- Implement custom matchers for complex assertions

## Error Handling Tests

- Test both positive and negative scenarios
- Verify exception messages and types

## Integration Tests

- Use `@SpringBootTest` for Spring Boot applications
- Mock external dependencies using `@MockBean`

## Performance Tests

- Implement benchmarks for critical paths
- Use JMH (Java Microbenchmark Harness) for accurate measurements

## Continuous Integration

- Run tests automatically on each commit
- Fail builds if tests don't pass or coverage decreases