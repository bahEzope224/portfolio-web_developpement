import { GetPublicProjectsData, GetMySkillsData, CreateNewProjectData, CreateNewProjectVariables, UpdateUserBioData, UpdateUserBioVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetPublicProjects(options?: useDataConnectQueryOptions<GetPublicProjectsData>): UseDataConnectQueryResult<GetPublicProjectsData, undefined>;
export function useGetPublicProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetPublicProjectsData>): UseDataConnectQueryResult<GetPublicProjectsData, undefined>;

export function useGetMySkills(options?: useDataConnectQueryOptions<GetMySkillsData>): UseDataConnectQueryResult<GetMySkillsData, undefined>;
export function useGetMySkills(dc: DataConnect, options?: useDataConnectQueryOptions<GetMySkillsData>): UseDataConnectQueryResult<GetMySkillsData, undefined>;

export function useCreateNewProject(options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;
export function useCreateNewProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;

export function useUpdateUserBio(options?: useDataConnectMutationOptions<UpdateUserBioData, FirebaseError, UpdateUserBioVariables>): UseDataConnectMutationResult<UpdateUserBioData, UpdateUserBioVariables>;
export function useUpdateUserBio(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserBioData, FirebaseError, UpdateUserBioVariables>): UseDataConnectMutationResult<UpdateUserBioData, UpdateUserBioVariables>;
