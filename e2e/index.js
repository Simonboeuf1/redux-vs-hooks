import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:3000`;  // specify the start page


//then create a test and place your code there
test('Full test', async t => {
    await t
      .setTestSpeed(.75)
        .typeText('#addTodo input', 'Active')
        .click('#addTodo button')
        .typeText('#addTodo input', 'Complete')
        .click('#addTodo button')
        .click(Selector("#todoList li").withText("Complete"))

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#todoList li').count).eql(2)
        .expect(Selector("#filters button").withAttribute('disabled').innerText).eql("All");

    await t
      .click(Selector("#filters button").withText("Completed"))

      .expect(Selector('#todoList li').withText("Complete").count).eql(1)
      .expect(Selector('#todoList li').withText("Active").count).eql(0)
      .expect(Selector("#filters button").withAttribute('disabled').innerText).eql("Completed");
      
    await t
      .click(Selector("#filters button").withText("Active"))

      .expect(Selector('#todoList li').withText("Complete").count).eql(0)
      .expect(Selector('#todoList li').withText("Active").count).eql(1)
      .expect(Selector("#filters button").withAttribute('disabled').innerText).eql("Active");

      await t
      .click(Selector("#filters button").withText("All"))

      .expect(Selector('#todoList li').withText("Complete").count).eql(1)
      .expect(Selector('#todoList li').withText("Active").count).eql(1)
      .expect(Selector("#filters button").withAttribute('disabled').innerText).eql("All");
});