// @flow

export type MigrationResultType = {
  from: number,
  to: number
};

export type ConfigType = {
  path: string,
  components: ComponentsConfigType
};

export type ChangelogInfoType = {
  version: number
};

export type MigratorType = (config: ConfigType) => void

export type ComponentsConfigType = {
  [name: string]: string
};

export type EntryKindType = 'addition' | 'change' | 'fix' | 'security' | 'removal' | 'deprecation';

export type EntryType = {
  component: ?string,
  kind: EntryKindType,
  description: string
};

export type VersionChangelogType = {
  version: ?string,
  entries: {
    [kind: EntryKindType]: EntryType[]
  }
};

export type ChangelogType = VersionChangelogType[];

export type ChangelogAPIType = {
  addEntry: (
    entry: EntryType
  ) => void;
  bumpNextVersion: (nextVersion: string) => void,
  generate: () => string,
  getChangelogData: () => ChangelogType,
  getPossibleNextVersions: () => string[] | null,
  getComponentsConfig: () => ComponentsConfigType,
  migrate: () => MigrationResultType,
  getChangelogInfo: () => ChangelogInfoType,
  saveChangelogInfo: (newChangelogInfo: ChangelogInfoType) => void
};

export type CLIOptionsType = {
  _: string[],
  directory: string
};

export type TemplateHelpersType = {
  stringifyVersion: (version: ?string) => string,
  readableComponent: (componentID: string) => string
};
