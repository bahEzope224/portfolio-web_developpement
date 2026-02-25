import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'portfolio-webdeveloppement',
  location: 'europe-west3'
};

export const getPublicProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicProjects');
}
getPublicProjectsRef.operationName = 'GetPublicProjects';

export function getPublicProjects(dc) {
  return executeQuery(getPublicProjectsRef(dc));
}

export const getMySkillsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMySkills');
}
getMySkillsRef.operationName = 'GetMySkills';

export function getMySkills(dc) {
  return executeQuery(getMySkillsRef(dc));
}

export const createNewProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewProject', inputVars);
}
createNewProjectRef.operationName = 'CreateNewProject';

export function createNewProject(dcOrVars, vars) {
  return executeMutation(createNewProjectRef(dcOrVars, vars));
}

export const updateUserBioRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserBio', inputVars);
}
updateUserBioRef.operationName = 'UpdateUserBio';

export function updateUserBio(dcOrVars, vars) {
  return executeMutation(updateUserBioRef(dcOrVars, vars));
}

