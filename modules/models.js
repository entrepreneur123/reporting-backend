const TransactionModel = require("./tx/tx.model");
const BeneficiaryModel = require("./beneficiary/beneficiary.model");
const VendorModel = require("./vendor/vendor.model");
const ProjectModel = require("./project/project.model");

let modelFactory = {
  TransactionModel: new TransactionModel().init(),
  BeneficiaryModel: new BeneficiaryModel().init(),
  VendorModel: new VendorModel().init(),
  ProjectModel: new ProjectModel().init(),
};

/**********************************************************
 * All the table associations belong here
 **********************************************************/

module.exports = modelFactory;
