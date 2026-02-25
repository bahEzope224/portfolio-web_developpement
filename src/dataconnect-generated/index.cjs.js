const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'portfolio-webdeveloppement',
  location: 'europe-west3'
};
exports.connectorConfig = connectorConfig;

const getPublicProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicProjects');
}
getPublicProjectsRef.operationName = 'GetPublicProjects';
exports.getPublicProjectsRef = getPublicProjectsRef;

exports.getPublicProjects = function getPublicProjects(dc) {
  return executeQuery(getPublicProjectsRef(dc));
};

const getMySkillsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMySkills');
}
getMySkillsRef.operationName = 'GetMySkills';
exports.getMySkillsRef = getMySkillsRef;

exports.getMySkills = function getMySkills(dc) {
  return executeQuery(getMySkillsRef(dc));
};

const createNewProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewProject', inputVars);
}
createNewProjectRef.operationName = 'CreateNewProject';
exports.createNewProjectRef = createNewProjectRef;

exports.createNewProject = function createNewProject(dcOrVars, vars) {
  return executeMutation(createNewProjectRef(dcOrVars, vars));
};

const updateUserBioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserBio', inputVars);
}
updateUserBioRef.operationName = 'UpdateUserBio';
exports.updateUserBioRef = updateUserBioRef;

exports.updateUserBio = function updateUserBio(dcOrVars, vars) {
  return executeMutation(updateUserBioRef(dcOrVars, vars));
};
