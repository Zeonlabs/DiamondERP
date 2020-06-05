"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_controller_1 = require("./variables/variables.controller");
exports.initVariables = variables_controller_1.initVariables;
exports.updateTrustInfo = variables_controller_1.updateTrustInfo;
exports.requestOtp = variables_controller_1.requestOtp;
exports.resetPin = variables_controller_1.resetPin;
exports.getVars = variables_controller_1.getVars;
exports.validateOtp = variables_controller_1.validateOtp;
const income_controller_1 = require("./income/income.controller");
exports.saveIncome = income_controller_1.saveIncome;
exports.deleteIncome = income_controller_1.deleteIncome;
exports.editIncome = income_controller_1.editIncome;
const expense_controller_1 = require("./expense/expense.controller");
exports.saveExpense = expense_controller_1.saveExpense;
exports.deleteExpense = expense_controller_1.deleteExpense;
exports.editExpense = expense_controller_1.editExpense;
const employee_controller_1 = require("./employee/employee.controller");
exports.saveEmployee = employee_controller_1.saveEmployee;
exports.getEmpDoc = employee_controller_1.getEmpDoc;
exports.deleteEmployee = employee_controller_1.deleteEmployee;
exports.editEmployee = employee_controller_1.editEmployee;
const note_controller_1 = require("./note/note.controller");
exports.addNote = note_controller_1.addNote;
exports.updateNote = note_controller_1.updateNote;
exports.deleteNote = note_controller_1.deleteNote;
const trustMember_controller_1 = require("./trustMember/trustMember.controller");
exports.addTrustMember = trustMember_controller_1.addTrustMember;
exports.deleteTrustMember = trustMember_controller_1.deleteTrustMember;
exports.updateTrustMember = trustMember_controller_1.updateTrustMember;
const common_controller_1 = require("./common/common.controller");
exports.generateFilteredReport = common_controller_1.generateFilteredReport;
exports.getIncomeExpenseAnalytics = common_controller_1.getIncomeExpenseAnalytics;
exports.smsController = common_controller_1.smsController;
const animalIncome_controller_1 = require("./animalIncome/animalIncome.controller");
exports.saveAnimalIncome = animalIncome_controller_1.saveAnimalIncome;
exports.deleteAnimalIncome = animalIncome_controller_1.deleteAnimalIncome;
exports.editAnimalIncome = animalIncome_controller_1.editAnimalIncome;
const deadAnimal_controller_1 = require("./deadAnimal/deadAnimal.controller");
exports.saveDeadAnimal = deadAnimal_controller_1.saveDeadAnimal;
exports.deleteDeadAnimal = deadAnimal_controller_1.deleteDeadAnimal;
exports.editDeadAnimal = deadAnimal_controller_1.editDeadAnimal;
const givenAnimal_controller_1 = require("./givenAnimal/givenAnimal.controller");
exports.saveGivenAnimal = givenAnimal_controller_1.saveGivenAnimal;
exports.deleteGivenAnimal = givenAnimal_controller_1.deleteGivenAnimal;
exports.editGivenAnimal = givenAnimal_controller_1.editGivenAnimal;
const animalCost_controller_1 = require("./animalCost/animalCost.controller");
exports.saveAnimalCost = animalCost_controller_1.saveAnimalCost;
exports.deleteAnimalCost = animalCost_controller_1.deleteAnimalCost;
exports.editAnimalCost = animalCost_controller_1.editAnimalCost;
const cheque_controller_1 = require("./cheque/cheque.controller");
exports.saveCheque = cheque_controller_1.saveCheque;
exports.editCheque = cheque_controller_1.editCheque;
exports.deleteCheque = cheque_controller_1.deleteCheque;
exports.filteredChequeReport = cheque_controller_1.filteredChequeReport;
//# sourceMappingURL=index.js.map