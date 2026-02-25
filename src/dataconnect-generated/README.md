# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPublicProjects*](#getpublicprojects)
  - [*GetMySkills*](#getmyskills)
- [**Mutations**](#mutations)
  - [*CreateNewProject*](#createnewproject)
  - [*UpdateUserBio*](#updateuserbio)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPublicProjects
You can execute the `GetPublicProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPublicProjects(): QueryPromise<GetPublicProjectsData, undefined>;

interface GetPublicProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicProjectsData, undefined>;
}
export const getPublicProjectsRef: GetPublicProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPublicProjects(dc: DataConnect): QueryPromise<GetPublicProjectsData, undefined>;

interface GetPublicProjectsRef {
  ...
  (dc: DataConnect): QueryRef<GetPublicProjectsData, undefined>;
}
export const getPublicProjectsRef: GetPublicProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPublicProjectsRef:
```typescript
const name = getPublicProjectsRef.operationName;
console.log(name);
```

### Variables
The `GetPublicProjects` query has no variables.
### Return Type
Recall that executing the `GetPublicProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPublicProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetPublicProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPublicProjects } from '@dataconnect/generated';


// Call the `getPublicProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPublicProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPublicProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
getPublicProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `GetPublicProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPublicProjectsRef } from '@dataconnect/generated';


// Call the `getPublicProjectsRef()` function to get a reference to the query.
const ref = getPublicProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPublicProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetMySkills
You can execute the `GetMySkills` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMySkills(): QueryPromise<GetMySkillsData, undefined>;

interface GetMySkillsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMySkillsData, undefined>;
}
export const getMySkillsRef: GetMySkillsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMySkills(dc: DataConnect): QueryPromise<GetMySkillsData, undefined>;

interface GetMySkillsRef {
  ...
  (dc: DataConnect): QueryRef<GetMySkillsData, undefined>;
}
export const getMySkillsRef: GetMySkillsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMySkillsRef:
```typescript
const name = getMySkillsRef.operationName;
console.log(name);
```

### Variables
The `GetMySkills` query has no variables.
### Return Type
Recall that executing the `GetMySkills` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMySkillsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMySkillsData {
  skills: ({
    id: UUIDString;
    name: string;
    proficiency?: string | null;
  } & Skill_Key)[];
}
```
### Using `GetMySkills`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMySkills } from '@dataconnect/generated';


// Call the `getMySkills()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMySkills();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMySkills(dataConnect);

console.log(data.skills);

// Or, you can use the `Promise` API.
getMySkills().then((response) => {
  const data = response.data;
  console.log(data.skills);
});
```

### Using `GetMySkills`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMySkillsRef } from '@dataconnect/generated';


// Call the `getMySkillsRef()` function to get a reference to the query.
const ref = getMySkillsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMySkillsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.skills);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.skills);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewProject
You can execute the `CreateNewProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewProject(vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface CreateNewProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
}
export const createNewProjectRef: CreateNewProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewProject(dc: DataConnect, vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface CreateNewProjectRef {
  ...
  (dc: DataConnect, vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
}
export const createNewProjectRef: CreateNewProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewProjectRef:
```typescript
const name = createNewProjectRef.operationName;
console.log(name);
```

### Variables
The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateNewProjectVariables {
  title: string;
  description: string;
  liveDemoUrl?: string | null;
  sourceCodeUrl?: string | null;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreateNewProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewProjectData {
  project_insert: Project_Key;
}
```
### Using `CreateNewProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewProject, CreateNewProjectVariables } from '@dataconnect/generated';

// The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`:
const createNewProjectVars: CreateNewProjectVariables = {
  title: ..., 
  description: ..., 
  liveDemoUrl: ..., // optional
  sourceCodeUrl: ..., // optional
  isPublic: ..., 
};

// Call the `createNewProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewProject(createNewProjectVars);
// Variables can be defined inline as well.
const { data } = await createNewProject({ title: ..., description: ..., liveDemoUrl: ..., sourceCodeUrl: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewProject(dataConnect, createNewProjectVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createNewProject(createNewProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreateNewProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewProjectRef, CreateNewProjectVariables } from '@dataconnect/generated';

// The `CreateNewProject` mutation requires an argument of type `CreateNewProjectVariables`:
const createNewProjectVars: CreateNewProjectVariables = {
  title: ..., 
  description: ..., 
  liveDemoUrl: ..., // optional
  sourceCodeUrl: ..., // optional
  isPublic: ..., 
};

// Call the `createNewProjectRef()` function to get a reference to the mutation.
const ref = createNewProjectRef(createNewProjectVars);
// Variables can be defined inline as well.
const ref = createNewProjectRef({ title: ..., description: ..., liveDemoUrl: ..., sourceCodeUrl: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewProjectRef(dataConnect, createNewProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateUserBio
You can execute the `UpdateUserBio` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserBio(vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

interface UpdateUserBioRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
}
export const updateUserBioRef: UpdateUserBioRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserBio(dc: DataConnect, vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

interface UpdateUserBioRef {
  ...
  (dc: DataConnect, vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
}
export const updateUserBioRef: UpdateUserBioRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserBioRef:
```typescript
const name = updateUserBioRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserBioVariables {
  bio: string;
}
```
### Return Type
Recall that executing the `UpdateUserBio` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserBioData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserBioData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserBio`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserBio, UpdateUserBioVariables } from '@dataconnect/generated';

// The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`:
const updateUserBioVars: UpdateUserBioVariables = {
  bio: ..., 
};

// Call the `updateUserBio()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserBio(updateUserBioVars);
// Variables can be defined inline as well.
const { data } = await updateUserBio({ bio: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserBio(dataConnect, updateUserBioVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserBio(updateUserBioVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserBio`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserBioRef, UpdateUserBioVariables } from '@dataconnect/generated';

// The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`:
const updateUserBioVars: UpdateUserBioVariables = {
  bio: ..., 
};

// Call the `updateUserBioRef()` function to get a reference to the mutation.
const ref = updateUserBioRef(updateUserBioVars);
// Variables can be defined inline as well.
const ref = updateUserBioRef({ bio: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserBioRef(dataConnect, updateUserBioVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

