export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  neq?: InputMaybe<Scalars["BigInt"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  neq?: InputMaybe<Scalars["Boolean"]>;
};

export enum CommunityStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Inactive = "INACTIVE",
}

export enum CommunityUserRoles {
  Admin = "ADMIN",
  Collaborator = "COLLABORATOR",
  Owner = "OWNER",
  Volunteer = "VOLUNTEER",
}

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  neq?: InputMaybe<Scalars["Date"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars["Datetime"]>;
  gt?: InputMaybe<Scalars["Datetime"]>;
  gte?: InputMaybe<Scalars["Datetime"]>;
  lt?: InputMaybe<Scalars["Datetime"]>;
  lte?: InputMaybe<Scalars["Datetime"]>;
  neq?: InputMaybe<Scalars["Datetime"]>;
};

export enum EventStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Inactive = "INACTIVE",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  neq?: InputMaybe<Scalars["Int"]>;
};

/** Boolean expression comparing fields on type "JSON" */
export type JsonFilter = {
  eq?: InputMaybe<Scalars["JSON"]>;
  neq?: InputMaybe<Scalars["JSON"]>;
};

export enum MercadolibreAllowedCurrencies {
  Ars = "ARS",
  Brl = "BRL",
  Clp = "CLP",
  Cop = "COP",
  Mxn = "MXN",
  Pen = "PEN",
  Uyu = "UYU",
}

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: "Mutation";
  /** Deletes zero or more records from the collection */
  deleteFromcommunitiesCollection: CommunitiesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromcommunity_userCollection: Community_UserDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromcountriesCollection: CountriesDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromeventsCollection: EventsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromsuper_adminsCollection: Super_AdminsDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromticket_templateCollection: Ticket_TemplateDeleteResponse;
  /** Deletes zero or more records from the collection */
  deleteFromticket_transactionsCollection: Ticket_TransactionsDeleteResponse;
  /** Adds one or more `communitiesInsertResponse` records to the collection */
  insertIntocommunitiesCollection?: Maybe<CommunitiesInsertResponse>;
  /** Adds one or more `community_userInsertResponse` records to the collection */
  insertIntocommunity_userCollection?: Maybe<Community_UserInsertResponse>;
  /** Adds one or more `countriesInsertResponse` records to the collection */
  insertIntocountriesCollection?: Maybe<CountriesInsertResponse>;
  /** Adds one or more `eventsInsertResponse` records to the collection */
  insertIntoeventsCollection?: Maybe<EventsInsertResponse>;
  /** Adds one or more `super_adminsInsertResponse` records to the collection */
  insertIntosuper_adminsCollection?: Maybe<Super_AdminsInsertResponse>;
  /** Adds one or more `ticket_templateInsertResponse` records to the collection */
  insertIntoticket_templateCollection?: Maybe<Ticket_TemplateInsertResponse>;
  /** Adds one or more `ticket_transactionsInsertResponse` records to the collection */
  insertIntoticket_transactionsCollection?: Maybe<
    Ticket_TransactionsInsertResponse
  >;
  /** Updates zero or more records in the collection */
  updatecommunitiesCollection: CommunitiesUpdateResponse;
  /** Updates zero or more records in the collection */
  updatecommunity_userCollection: Community_UserUpdateResponse;
  /** Updates zero or more records in the collection */
  updatecountriesCollection: CountriesUpdateResponse;
  /** Updates zero or more records in the collection */
  updateeventsCollection: EventsUpdateResponse;
  /** Updates zero or more records in the collection */
  updatesuper_adminsCollection: Super_AdminsUpdateResponse;
  /** Updates zero or more records in the collection */
  updateticket_templateCollection: Ticket_TemplateUpdateResponse;
  /** Updates zero or more records in the collection */
  updateticket_transactionsCollection: Ticket_TransactionsUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcommunitiesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CommunitiesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcommunity_UserCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Community_UserFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromcountriesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CountriesFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromeventsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EventsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromsuper_AdminsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Super_AdminsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromticket_TemplateCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Ticket_TemplateFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromticket_TransactionsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Ticket_TransactionsFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocommunitiesCollectionArgs = {
  objects: Array<CommunitiesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocommunity_UserCollectionArgs = {
  objects: Array<Community_UserInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntocountriesCollectionArgs = {
  objects: Array<CountriesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoeventsCollectionArgs = {
  objects: Array<EventsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntosuper_AdminsCollectionArgs = {
  objects: Array<Super_AdminsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoticket_TemplateCollectionArgs = {
  objects: Array<Ticket_TemplateInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoticket_TransactionsCollectionArgs = {
  objects: Array<Ticket_TransactionsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdatecommunitiesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CommunitiesFilter>;
  set: CommunitiesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecommunity_UserCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Community_UserFilter>;
  set: Community_UserUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatecountriesCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<CountriesFilter>;
  set: CountriesUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateeventsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<EventsFilter>;
  set: EventsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatesuper_AdminsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Super_AdminsFilter>;
  set: Super_AdminsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateticket_TemplateCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Ticket_TemplateFilter>;
  set: Ticket_TemplateUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateticket_TransactionsCollectionArgs = {
  atMost?: Scalars["Int"];
  filter?: InputMaybe<Ticket_TransactionsFilter>;
  set: Ticket_TransactionsUpdateInput;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  AscNullsFirst = "AscNullsFirst",
  AscNullsLast = "AscNullsLast",
  DescNullsFirst = "DescNullsFirst",
  DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

/** The root type for querying data */
export type Query = {
  __typename?: "Query";
  /** A pagable collection of type `communities` */
  communitiesCollection?: Maybe<CommunitiesConnection>;
  /** A pagable collection of type `community_user` */
  community_userCollection?: Maybe<Community_UserConnection>;
  /** A pagable collection of type `countries` */
  countriesCollection?: Maybe<CountriesConnection>;
  /** A pagable collection of type `events` */
  eventsCollection?: Maybe<EventsConnection>;
  /** A pagable collection of type `super_admins` */
  super_adminsCollection?: Maybe<Super_AdminsConnection>;
  /** A pagable collection of type `ticket_template` */
  ticket_templateCollection?: Maybe<Ticket_TemplateConnection>;
  /** A pagable collection of type `ticket_transactions` */
  ticket_transactionsCollection?: Maybe<Ticket_TransactionsConnection>;
};

/** The root type for querying data */
export type QueryCommunitiesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CommunitiesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CommunitiesOrderBy>>;
};

/** The root type for querying data */
export type QueryCommunity_UserCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Community_UserFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Community_UserOrderBy>>;
};

/** The root type for querying data */
export type QueryCountriesCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<CountriesFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CountriesOrderBy>>;
};

/** The root type for querying data */
export type QueryEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

/** The root type for querying data */
export type QuerySuper_AdminsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Super_AdminsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Super_AdminsOrderBy>>;
};

/** The root type for querying data */
export type QueryTicket_TemplateCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Ticket_TemplateFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Ticket_TemplateOrderBy>>;
};

/** The root type for querying data */
export type QueryTicket_TransactionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Ticket_TransactionsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Ticket_TransactionsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
};

export enum TicketTemplateStatus {
  Active = "ACTIVE",
  Draft = "DRAFT",
  Inactive = "INACTIVE",
}

export enum TicketTransactionStatus {
  Assigned = "ASSIGNED",
  Generated = "GENERATED",
  Rejected = "REJECTED",
}

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars["Time"]>;
  gt?: InputMaybe<Scalars["Time"]>;
  gte?: InputMaybe<Scalars["Time"]>;
  lt?: InputMaybe<Scalars["Time"]>;
  lte?: InputMaybe<Scalars["Time"]>;
  neq?: InputMaybe<Scalars["Time"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars["UUID"]>;
  neq?: InputMaybe<Scalars["UUID"]>;
};

export type Communities = {
  __typename?: "communities";
  community_userCollection?: Maybe<Community_UserConnection>;
  created_at?: Maybe<Scalars["Datetime"]>;
  description: Scalars["String"];
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["UUID"];
  image?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  slug: Scalars["String"];
  status: Scalars["String"];
  updated_at: Scalars["Datetime"];
};

export type CommunitiesCommunity_UserCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Community_UserFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Community_UserOrderBy>>;
};

export type CommunitiesEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type CommunitiesConnection = {
  __typename?: "communitiesConnection";
  edges: Array<CommunitiesEdge>;
  pageInfo: PageInfo;
};

export type CommunitiesDeleteResponse = {
  __typename?: "communitiesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Communities>;
};

export type CommunitiesEdge = {
  __typename?: "communitiesEdge";
  cursor: Scalars["String"];
  node?: Maybe<Communities>;
};

export type CommunitiesFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type CommunitiesInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type CommunitiesInsertResponse = {
  __typename?: "communitiesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Communities>;
};

export type CommunitiesOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  slug?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type CommunitiesUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type CommunitiesUpdateResponse = {
  __typename?: "communitiesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Communities>;
};

export type Community_User = {
  __typename?: "community_user";
  communities?: Maybe<Communities>;
  community_id: Scalars["UUID"];
  created_at?: Maybe<Scalars["Datetime"]>;
  id: Scalars["UUID"];
  role: Scalars["String"];
  updated_at: Scalars["Datetime"];
  user_id: Scalars["UUID"];
};

export type Community_UserConnection = {
  __typename?: "community_userConnection";
  edges: Array<Community_UserEdge>;
  pageInfo: PageInfo;
};

export type Community_UserDeleteResponse = {
  __typename?: "community_userDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Community_User>;
};

export type Community_UserEdge = {
  __typename?: "community_userEdge";
  cursor: Scalars["String"];
  node?: Maybe<Community_User>;
};

export type Community_UserFilter = {
  community_id?: InputMaybe<UuidFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  role?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Community_UserInsertInput = {
  community_id?: InputMaybe<Scalars["UUID"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  role?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Community_UserInsertResponse = {
  __typename?: "community_userInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Community_User>;
};

export type Community_UserOrderBy = {
  community_id?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  role?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Community_UserUpdateInput = {
  community_id?: InputMaybe<Scalars["UUID"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  role?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Community_UserUpdateResponse = {
  __typename?: "community_userUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Community_User>;
};

export type Countries = {
  __typename?: "countries";
  eventsCollection?: Maybe<EventsConnection>;
  id: Scalars["BigInt"];
  iso2: Scalars["String"];
  iso3?: Maybe<Scalars["String"]>;
  local_name?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type CountriesEventsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<EventsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<EventsOrderBy>>;
};

export type CountriesConnection = {
  __typename?: "countriesConnection";
  edges: Array<CountriesEdge>;
  pageInfo: PageInfo;
};

export type CountriesDeleteResponse = {
  __typename?: "countriesDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type CountriesEdge = {
  __typename?: "countriesEdge";
  cursor: Scalars["String"];
  node?: Maybe<Countries>;
};

export type CountriesFilter = {
  id?: InputMaybe<BigIntFilter>;
  iso2?: InputMaybe<StringFilter>;
  iso3?: InputMaybe<StringFilter>;
  local_name?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CountriesInsertInput = {
  iso2?: InputMaybe<Scalars["String"]>;
  iso3?: InputMaybe<Scalars["String"]>;
  local_name?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CountriesInsertResponse = {
  __typename?: "countriesInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type CountriesOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  iso2?: InputMaybe<OrderByDirection>;
  iso3?: InputMaybe<OrderByDirection>;
  local_name?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type CountriesUpdateInput = {
  iso2?: InputMaybe<Scalars["String"]>;
  iso3?: InputMaybe<Scalars["String"]>;
  local_name?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type CountriesUpdateResponse = {
  __typename?: "countriesUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Countries>;
};

export type Events = {
  __typename?: "events";
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  communities?: Maybe<Communities>;
  community_id: Scalars["UUID"];
  countries?: Maybe<Countries>;
  country?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["Datetime"]>;
  description: Scalars["String"];
  end_date: Scalars["Datetime"];
  id: Scalars["UUID"];
  image_link: Scalars["String"];
  map_link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  start_date: Scalars["Datetime"];
  status?: Maybe<Scalars["String"]>;
  ticket_templateCollection?: Maybe<Ticket_TemplateConnection>;
  updated_at: Scalars["Datetime"];
};

export type EventsTicket_TemplateCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Ticket_TemplateFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Ticket_TemplateOrderBy>>;
};

export type EventsConnection = {
  __typename?: "eventsConnection";
  edges: Array<EventsEdge>;
  pageInfo: PageInfo;
};

export type EventsDeleteResponse = {
  __typename?: "eventsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsEdge = {
  __typename?: "eventsEdge";
  cursor: Scalars["String"];
  node?: Maybe<Events>;
};

export type EventsFilter = {
  address?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  community_id?: InputMaybe<UuidFilter>;
  country?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_date?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  image_link?: InputMaybe<StringFilter>;
  map_link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  start_date?: InputMaybe<DatetimeFilter>;
  status?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type EventsInsertInput = {
  address?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  community_id?: InputMaybe<Scalars["UUID"]>;
  country?: InputMaybe<Scalars["BigInt"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  image_link?: InputMaybe<Scalars["String"]>;
  map_link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["Datetime"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type EventsInsertResponse = {
  __typename?: "eventsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type EventsOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  city?: InputMaybe<OrderByDirection>;
  community_id?: InputMaybe<OrderByDirection>;
  country?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  end_date?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  image_link?: InputMaybe<OrderByDirection>;
  map_link?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  start_date?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type EventsUpdateInput = {
  address?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  community_id?: InputMaybe<Scalars["UUID"]>;
  country?: InputMaybe<Scalars["BigInt"]>;
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  end_date?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  image_link?: InputMaybe<Scalars["String"]>;
  map_link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  start_date?: InputMaybe<Scalars["Datetime"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type EventsUpdateResponse = {
  __typename?: "eventsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Events>;
};

export type Super_Admins = {
  __typename?: "super_admins";
  created_at?: Maybe<Scalars["Datetime"]>;
  id: Scalars["UUID"];
  updated_at: Scalars["Datetime"];
  user_id: Scalars["UUID"];
};

export type Super_AdminsConnection = {
  __typename?: "super_adminsConnection";
  edges: Array<Super_AdminsEdge>;
  pageInfo: PageInfo;
};

export type Super_AdminsDeleteResponse = {
  __typename?: "super_adminsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Super_Admins>;
};

export type Super_AdminsEdge = {
  __typename?: "super_adminsEdge";
  cursor: Scalars["String"];
  node?: Maybe<Super_Admins>;
};

export type Super_AdminsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Super_AdminsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Super_AdminsInsertResponse = {
  __typename?: "super_adminsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Super_Admins>;
};

export type Super_AdminsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Super_AdminsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Super_AdminsUpdateResponse = {
  __typename?: "super_adminsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Super_Admins>;
};

export type Ticket_Template = {
  __typename?: "ticket_template";
  created_at: Scalars["Datetime"];
  description?: Maybe<Scalars["String"]>;
  event_id: Scalars["UUID"];
  events?: Maybe<Events>;
  id: Scalars["UUID"];
  name: Scalars["String"];
  price: Scalars["String"];
  quantity: Scalars["String"];
  status: Scalars["String"];
  ticket_transactionsCollection?: Maybe<Ticket_TransactionsConnection>;
  updated_at: Scalars["Datetime"];
};

export type Ticket_TemplateTicket_TransactionsCollectionArgs = {
  after?: InputMaybe<Scalars["Cursor"]>;
  before?: InputMaybe<Scalars["Cursor"]>;
  filter?: InputMaybe<Ticket_TransactionsFilter>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<Ticket_TransactionsOrderBy>>;
};

export type Ticket_TemplateConnection = {
  __typename?: "ticket_templateConnection";
  edges: Array<Ticket_TemplateEdge>;
  pageInfo: PageInfo;
};

export type Ticket_TemplateDeleteResponse = {
  __typename?: "ticket_templateDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Template>;
};

export type Ticket_TemplateEdge = {
  __typename?: "ticket_templateEdge";
  cursor: Scalars["String"];
  node?: Maybe<Ticket_Template>;
};

export type Ticket_TemplateFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  event_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Ticket_TemplateInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  event_id?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["String"]>;
  quantity?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type Ticket_TemplateInsertResponse = {
  __typename?: "ticket_templateInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Template>;
};

export type Ticket_TemplateOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  event_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  quantity?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Ticket_TemplateUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  description?: InputMaybe<Scalars["String"]>;
  event_id?: InputMaybe<Scalars["UUID"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["String"]>;
  quantity?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
};

export type Ticket_TemplateUpdateResponse = {
  __typename?: "ticket_templateUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Template>;
};

export type Ticket_Transactions = {
  __typename?: "ticket_transactions";
  created_at?: Maybe<Scalars["Datetime"]>;
  id: Scalars["UUID"];
  status: Scalars["String"];
  ticket_template?: Maybe<Ticket_Template>;
  ticket_template_id: Scalars["UUID"];
  updated_at: Scalars["Datetime"];
  user_id: Scalars["UUID"];
};

export type Ticket_TransactionsConnection = {
  __typename?: "ticket_transactionsConnection";
  edges: Array<Ticket_TransactionsEdge>;
  pageInfo: PageInfo;
};

export type Ticket_TransactionsDeleteResponse = {
  __typename?: "ticket_transactionsDeleteResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Transactions>;
};

export type Ticket_TransactionsEdge = {
  __typename?: "ticket_transactionsEdge";
  cursor: Scalars["String"];
  node?: Maybe<Ticket_Transactions>;
};

export type Ticket_TransactionsFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  status?: InputMaybe<StringFilter>;
  ticket_template_id?: InputMaybe<UuidFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type Ticket_TransactionsInsertInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  status?: InputMaybe<Scalars["String"]>;
  ticket_template_id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Ticket_TransactionsInsertResponse = {
  __typename?: "ticket_transactionsInsertResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Transactions>;
};

export type Ticket_TransactionsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  status?: InputMaybe<OrderByDirection>;
  ticket_template_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Ticket_TransactionsUpdateInput = {
  created_at?: InputMaybe<Scalars["Datetime"]>;
  id?: InputMaybe<Scalars["UUID"]>;
  status?: InputMaybe<Scalars["String"]>;
  ticket_template_id?: InputMaybe<Scalars["UUID"]>;
  updated_at?: InputMaybe<Scalars["Datetime"]>;
  user_id?: InputMaybe<Scalars["UUID"]>;
};

export type Ticket_TransactionsUpdateResponse = {
  __typename?: "ticket_transactionsUpdateResponse";
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars["Int"];
  /** Array of records impacted by the mutation */
  records: Array<Ticket_Transactions>;
};
