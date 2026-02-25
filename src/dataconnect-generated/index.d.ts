import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateNewProjectData {
  project_insert: Project_Key;
}

export interface CreateNewProjectVariables {
  title: string;
  description: string;
  liveDemoUrl?: string | null;
  sourceCodeUrl?: string | null;
  isPublic: boolean;
}

export interface GetMySkillsData {
  skills: ({
    id: UUIDString;
    name: string;
    proficiency?: string | null;
  } & Skill_Key)[];
}

export interface GetPublicProjectsData {
  projects: ({
    id: UUIDString;
    title: string;
    description: string;
    liveDemoUrl?: string | null;
    sourceCodeUrl?: string | null;
    createdAt: TimestampString;
    user?: {
      displayName: string;
    };
      categories_via_ProjectCategory: ({
        name: string;
      })[];
        medias_on_project: ({
          url: string;
          mediaType: string;
          altText?: string | null;
          position?: number | null;
        })[];
  } & Project_Key)[];
}

export interface Media_Key {
  id: UUIDString;
  __typename?: 'Media_Key';
}

export interface ProjectCategory_Key {
  projectId: UUIDString;
  categoryId: UUIDString;
  __typename?: 'ProjectCategory_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateUserBioData {
  user_update?: User_Key | null;
}

export interface UpdateUserBioVariables {
  bio: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface GetPublicProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPublicProjectsData, undefined>;
  operationName: string;
}
export const getPublicProjectsRef: GetPublicProjectsRef;

export function getPublicProjects(): QueryPromise<GetPublicProjectsData, undefined>;
export function getPublicProjects(dc: DataConnect): QueryPromise<GetPublicProjectsData, undefined>;

interface GetMySkillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySkillsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMySkillsData, undefined>;
  operationName: string;
}
export const getMySkillsRef: GetMySkillsRef;

export function getMySkills(): QueryPromise<GetMySkillsData, undefined>;
export function getMySkills(dc: DataConnect): QueryPromise<GetMySkillsData, undefined>;

interface CreateNewProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  operationName: string;
}
export const createNewProjectRef: CreateNewProjectRef;

export function createNewProject(vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;
export function createNewProject(dc: DataConnect, vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface UpdateUserBioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
  operationName: string;
}
export const updateUserBioRef: UpdateUserBioRef;

export function updateUserBio(vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;
export function updateUserBio(dc: DataConnect, vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

