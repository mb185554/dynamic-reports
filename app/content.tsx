const MainContent = [
  {
    query: "Who is the best developer in the world?",
    answer: `This text will be revealed like magic and will be wrapped correctly and beautifully set in the response field preserving newlines.

    This UI was created by him.
      
      Therefore, I think everyone should agree Mayur is the greatest UI developer of all time. Here's is the proof as an image:
      `,
    graphSrc: "/v.png",
  },
  {
    query:
      "How many debit transactions done in last month have a transaction value of above $100? Chart it as a bar graph.",
    answer: `Sure! Here are stats for debit transaction for month of June 2023:
      There were a total of 43 transaction having a value of above $100. Among these, the most recent transaction was to Madcap Inc. of $1,782,234.03 for the purpose of "Buying a Ferrari".
      
      The highest value was $1,782,234.03 for the purpose of "Buying a Ferrari" done on 04 June 2023 at Chicago Car Expo.
      
      Here's a histogram of the transaction history of June:
      `,
    graphSrc: "/1.png",
  },
  {
    query:
      "How much money was inbound vs outbound? Show me in pie chart format.",
    answer: `Sure! Here are stats for debit transaction for month of June 2023:
      You spent a total of $2,234.23 and received $32,351.03 in the past 7 days. Your balance has gone up by $30,116.80.

      Here's a pie chart for the credit vs debit transactions:
      `,
    graphSrc: "/2.png",
  },
  {
    query:
      "How many transaction that have value from $1000 to $2000?",
    answer: `Greetings! I'm delighted to assist you with the information. Upon checking your account, I can report that there have been a total of 15 transactions with a value between $1000 and $2000 in the past month. If you require any further details or assistance, feel free to let me know!`,
  },
  {
    query:
      "Show me transactions from Chicago during the summers in tabular form",
    answer: `Sure! Based on the bank details, here's a summary:
    * Total number of transactions: 10
    * Location: Chicago
    * Time Period: June-August
    
    Transaction Amount Summary:
    * Minimum Transaction Amount: $1100
    * Maximum Transaction Amount: $1950
    * Average Transaction Amount: $1595
    * Total Transaction Amount during summers in Chicago: $15,950
    
    | Transaction Date | Location   | Transaction Amount ($) |
    |------------------|------------|-----------------------|
    | 2023-06-10       | Chicago    | $1530                 |
    | 2023-06-15       | Chicago    | $1200                 |
    | 2023-07-02       | Chicago    | $1950                 |
    | 2023-07-05       | Chicago    | $1750                 |
    | 2023-07-20       | Chicago    | $1320                 |
    | 2023-08-05       | Chicago    | $1800                 |
    | 2023-08-15       | Chicago    | $1100                 |
    | 2023-08-25       | Chicago    | $1900                 |
    | 2023-09-01       | Chicago    | $1400                 |
    | 2023-09-10       | Chicago    | $1650                 |
    |-------------------------------------------------------|
    `,
  },
  {
    query:
      "What are the transactions that took place last week?",
    answer: `Certainly! Transaction Summary for the Week (July 13, 2023, to July 19, 2023):
    * Total number of transactions: 6
    * Locations: Chicago, New York, Los Angeles
    * Minimum Transaction Amount: $1200
    * Maximum Transaction Amount: $1950
    * Average Transaction Amount: $1635
    * Total Transaction Amount for the week: $9,550
    `,
  },
];

export default MainContent;
