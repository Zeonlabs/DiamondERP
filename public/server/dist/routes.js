"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const pagination_middleware_1 = require("./middlewares/pagination/pagination.middleware");
const schema_1 = require("./schema");
const auth_common_1 = require("./common/auth.common");
class Routes {
    routes(app) {
        const incomeRoute = express_1.Router(), expenseRoute = express_1.Router(), employeeRoute = express_1.Router(), noteRoute = express_1.Router(), trustMemberRoute = express_1.Router(), animalIncomeRoute = express_1.Router(), deadAnimalRoute = express_1.Router(), givenAnimalRoute = express_1.Router(), animalCostRouter = express_1.Router(), animalStmtRouter = express_1.Router(), variablesRouter = express_1.Router(), chequeRouter = express_1.Router();
        app.post('/auth', auth_common_1.auth);
        app.post('/sms/send', controllers_1.smsController);
        app.get('/inex/analytics', controllers_1.getIncomeExpenseAnalytics);
        variablesRouter.post('/setup', controllers_1.initVariables);
        variablesRouter.get('/', controllers_1.getVars);
        variablesRouter.patch('/', controllers_1.updateTrustInfo);
        variablesRouter.get('/req/otp', controllers_1.requestOtp);
        variablesRouter.patch('/reset/pin', controllers_1.resetPin);
        variablesRouter.get('/otp/validate/:otp', controllers_1.validateOtp);
        incomeRoute.post('/add', controllers_1.saveIncome);
        incomeRoute.patch('/edit/:id', controllers_1.editIncome);
        incomeRoute.delete('/delete/:id', controllers_1.deleteIncome);
        incomeRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Income));
        incomeRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.Income));
        expenseRoute.post('/add', controllers_1.saveExpense);
        expenseRoute.patch('/edit/:id', controllers_1.editExpense);
        expenseRoute.delete('/delete/:id', controllers_1.deleteExpense);
        expenseRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Expense));
        expenseRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.Expense));
        employeeRoute.post('/add', controllers_1.saveEmployee);
        employeeRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Employee));
        employeeRoute.get('/doc/:id', controllers_1.getEmpDoc);
        employeeRoute.patch('/edit/:id', controllers_1.editEmployee);
        employeeRoute.delete('/delete/:id', controllers_1.deleteEmployee);
        employeeRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.Employee));
        noteRoute.post('/add', controllers_1.addNote);
        noteRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Note));
        noteRoute.patch('/update/:id', controllers_1.updateNote);
        noteRoute.delete('/delete/:id', controllers_1.deleteNote);
        trustMemberRoute.post('/add', controllers_1.addTrustMember);
        trustMemberRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.TrustMember));
        trustMemberRoute.patch('/update/:id', controllers_1.updateTrustMember);
        trustMemberRoute.delete('/delete/:id', controllers_1.deleteTrustMember);
        trustMemberRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.TrustMember));
        animalIncomeRoute.post('/add', controllers_1.saveAnimalIncome);
        animalIncomeRoute.delete('/delete/:id', controllers_1.deleteAnimalIncome);
        animalIncomeRoute.patch('/edit/:id', controllers_1.editAnimalIncome);
        animalIncomeRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.AnimalIncome));
        animalIncomeRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.AnimalIncome));
        deadAnimalRoute.post('/add', controllers_1.saveDeadAnimal);
        deadAnimalRoute.delete('/delete/:id', controllers_1.deleteDeadAnimal);
        deadAnimalRoute.patch('/edit/:id', controllers_1.editDeadAnimal);
        deadAnimalRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.DeadAnimal));
        deadAnimalRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.DeadAnimal));
        givenAnimalRoute.post('/add', controllers_1.saveGivenAnimal);
        givenAnimalRoute.delete('/delete/:id', controllers_1.deleteGivenAnimal);
        givenAnimalRoute.patch('/edit/:id', controllers_1.editGivenAnimal);
        givenAnimalRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.GivenAnimal));
        givenAnimalRoute.get('/filter', controllers_1.generateFilteredReport(schema_1.GivenAnimal));
        animalCostRouter.post('/add', controllers_1.saveAnimalCost);
        animalCostRouter.delete('/delete/:id', controllers_1.deleteAnimalCost);
        animalCostRouter.patch('/edit/:id', controllers_1.editAnimalCost);
        animalCostRouter.get('/', pagination_middleware_1.paginationMiddleware(schema_1.AnimalCost));
        animalCostRouter.get('/filter', controllers_1.generateFilteredReport(schema_1.AnimalCost));
        animalStmtRouter.get('/', pagination_middleware_1.paginationMiddleware(schema_1.AnimalStmt));
        animalStmtRouter.get('/filter', controllers_1.generateFilteredReport(schema_1.AnimalStmt));
        chequeRouter.post('/add', controllers_1.saveCheque);
        chequeRouter.patch('/edit/:id', controllers_1.editCheque);
        chequeRouter.delete('/delete/:id', controllers_1.deleteCheque);
        chequeRouter.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Cheque));
        chequeRouter.get('/filter', controllers_1.filteredChequeReport);
        app.use('/income', incomeRoute);
        app.use('/expense', expenseRoute);
        app.use('/employee', employeeRoute);
        app.use('/note', noteRoute);
        app.use('/trust-member', trustMemberRoute);
        app.use('/animal-income', animalIncomeRoute);
        app.use('/dead-animal', deadAnimalRoute);
        app.use('/given-animal', givenAnimalRoute);
        app.use('/animal-cost', animalCostRouter);
        app.use('/animal-stmt', animalStmtRouter);
        app.use('/me', variablesRouter);
        app.use('/cheque', chequeRouter);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map