// CODING CHALLENGE 1

// var MarkHeight = 10;
// var MarkWeight = 20;

// var JohnHeight = 30;
// var JohnWeight = 45;

// var MarkBMI = MarkWeight / (MarkHeight * MarkHeight);

// var JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

// console.log("Mark's BMI is " + MarkBMI);
// console.log("John's BMI is " + JohnBMI);

// var isMarksHigher = MarkBMI > JohnBMI ? true : false;

// console.log("Is Mark's BMI higher than John's: " + isMarksHigher);

// CODING CHALLENGE 2

// var JohnScore = [89, 120, 103];
// var MikeScore = [116, 94, 123];
// var MaryScore = [116, 94, 123];

// var avgJohnScore =
//   (JohnScore[0] + JohnScore[1] + JohnScore[2]) / JohnScore.length;

// var avgMikeScore =
//   (MikeScore[0] + MikeScore[1] + MikeScore[2]) / MikeScore.length;

// var avgMaryScore =
//   (MaryScore[0] + MaryScore[1] + MaryScore[2]) / MaryScore.length;

// if (avgJohnScore > avgMikeScore && avgJohnScore > avgMaryScore) {
//   console.log(
//     "John's team won with a highest average score of " + avgJohnScore
//   );
// } else if (avgMikeScore > avgJohnScore && avgMikeScore > avgMaryScore) {
//   console.log(
//     "Mike's team won with a highest average score of " + avgMikeScore
//   );
// } else if (avgMaryScore > avgJohnScore && avgMaryScore > avgMikeScore) {
//   console.log("Mary's team won with a highest scroe of " + avgMaryScore);
// } //if (avgMaryScore === avgMikeScore && avgMaryScore === avgJohnScore) {
// else {
//   console.log("There is a draw");
// // }

// // Coding Challenge 3

// function myFunction(this.bills) {
//   var tipsArray = [];
//   for (var i = 0; i < this.bills.length; i++) {
//     var tip = 0;
//     if (this.bills[i] < 50) {
//       tip = this.bills[i] / 20;
//     } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
//       tip = this.bills[i] / 15;
//     } else if (this.bills[i] > 200) {
//       tip = this.bills[i] / 10;
//     }
//     tipsArray[i] = tip;
//   }
//   return tipsArray;
// }

// var this.bills = [124, 48, 268];

// tipsarray = myFunction(this.bills);

// console.log("These are the tips for each bill respectively " + tipsarray);

// finalthis.billsArray = [];

// for (let i = 0, len = tipsarray.length; i < len; i++) {
//   finalthis.billsArray[i] = this.bills[i] + tipsarray[i];
// }

// console.log(
//   "These are the final bill prices for each bill respectively " +
//     finalthis.billsArray
// );

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false
// };

// console.log(john.firstName);
// console.log(john["lastName"]);
// var x = "birthYear";
// console.log(john[x]);

// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// // new Object Syntax
// var jane = new Object();
// jane.name = "Jane";
// jane.birthYear = 1969;
// jane["lastName"] = "Smith";
// console.log(jane);

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1992,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();

// console.log(john);

// CODING CHALLENGE 4

// var Mark = {
//   name: "Mark",
//   height: 90,
//   weight: 2,
//   calcBmi: function() {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var John = {
//   name: "John",
//   height: 9890,
//   weight: 2,
//   calcBmi: function() {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   }
// };

// if (Mark.calcBmi() > John.calcBmi()) {
//   console.log("Mark has the highest BMI with the BMI of " + Mark.bmi);
// } else if (Mark.bmi < John.bmi) {
//   console.log("John has the highest BMI with the BMI of" + John.bmi);
// } else {
//   console.log("They have the same BMI");
// }

// var john = {
//   fullName: "John Smith",
//   bills: [124, 48, 268, 180, 42],
//   tipsArray: [],
//   finalBillsArray: [],
//   calcTip: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       var tip = 0;
//       if (this.bills[i] < 50) {
//         tip = this.bills[i] / 20;
//       } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
//         tip = this.bills[i] / 15;
//       } else if (this.bills[i] > 200) {
//         tip = this.bills[i] / 10;
//       }
//       this.tipsArray[i] = tip;
//     }
//     return this.tipsArray;
//   },
//   calcFinalBills: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       var tip = 0;
//       if (this.bills[i] < 50) {
//         tip = this.bills[i] / 20;
//       } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
//         tip = this.bills[i] / 15;
//       } else if (this.bills[i] > 200) {
//         tip = this.bills[i] / 10;
//       }
//       this.finalBillsArray[i] = tip + this.bills[i];
//     }
//     return this.finalBillsArray;
//   }
// };

// john.calcTip();
// john.calcFinalBills();

// console.log(john.tipsArray);
// console.log(john.finalBillsArray);

// var mark = {
//   fullName: "Mark",
//   bills: [77, 375, 110, 45],
//   tipsArray: [],
//   finalBillsArray: [],
//   calcTip: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       var tip = 0;
//       if (this.bills[i] < 100) {
//         tip = this.bills[i] / 20;
//       } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
//         tip = this.bills[i] / 10;
//       } else if (this.bills[i] > 300) {
//         tip = this.bills[i] / 25;
//       }
//       this.tipsArray[i] = tip;
//     }
//     return this.tipsArray;
//   },
//   calcFinalBills: function() {
//     for (var i = 0; i < this.bills.length; i++) {
//       var tip = 0;
//       if (this.bills[i] < 10) {
//         tip = this.bills[i] / 20;
//       } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
//         tip = this.bills[i] / 10;
//       } else if (this.bills[i] > 300) {
//         tip = this.bills[i] / 25;
//       }
//       this.finalBillsArray[i] = tip + this.bills[i];
//     }
//     return this.finalBillsArray;
//   }
// };

// mark.calcTip();
// mark.calcFinalBills();

// console.log(mark.tipsArray);
// console.log(mark.finalBillsArray);

// function calcAvgTips(tips) {
//   var sum = 0;
//   for (let i = 0, len = tips.length; i < len; i++) {
//     sum += tips[i];
//   }
//   return sum / tips.length;
// }
// marksAvgTips = calcAvgTips(mark.tipsArray);
// johnsAvgTips = calcAvgTips(john.tipsArray);

// console.log(marksAvgTips, johnsAvgTips);

// if (marksAvgTips > johnsAvgTips) {
//   console.log("Mark has the highest tips on Average");
// } else if (johnsAvgTips > marksAvgTips) {
//   console.log("John has the highest tips on Average");
// } else {
//   console.log("They both have the same average for tips");
// }
