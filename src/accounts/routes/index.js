import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../controllers/ValidationController'; //add to import statements at top of file

const createRouter = (dependencies) => {
    const router = express.Router();
    // load controller with dependencies
    const accountsController = AccountsController(dependencies);
    const validationController = ValidationController(dependencies);

    // router.route('/')
    //     .post(accountsController.createAccount);
    router.route('/')
        .post(validationController.validateAccount, accountsController.createAccount); //add validateAccount to route

    router.route('/')
        .get(accountsController.listAccounts);

    router.route('/:id')
        .get(accountsController.getAccount);

    router.route('/:id')
        .post(accountsController.getAccount);

    router.route('/security/token')
        .post(accountsController.authenticateAccount);

    return router;
};
export default createRouter;