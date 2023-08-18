import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  queryText?: string;
  server?: string;
  capacity: number;
  timeoutS: number;
  dataType?: string;
  IsDisplayName?: boolean;
  aliasName?: string;
  multiplier?: string;
  pattern?: string;
  selectedSignals: any
}

export const DEFAULT_QUERY: Partial<MyQuery> = {
  capacity: 1000,
  timeoutS: 30,
  IsDisplayName : false,
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}

