/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type RecordingSource = 'DialVerb'|'Conference'|'OutboundAPI'|'Trunking'|'RecordVerb'|'StartCallRecordingAPI'|'StartConferenceRecordingAPI';

type RecordingStatus = 'in-progress'|'paused'|'stopped'|'processing'|'completed'|'failed';

/**
 * @description Initialize the RecordingList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param callSid - The unique id for the call leg that corresponds to the recording.
 */
declare function RecordingList(version: V2010, accountSid: string, callSid: string): RecordingListInstance;

/**
 * Options to pass to update
 *
 * @property pauseBehavior - Whether to record or not during the pause period.
 * @property status - The status to change the recording to.
 */
interface RecordingInstanceUpdateOptions {
  pauseBehavior?: string;
  status: RecordingStatus;
}

interface RecordingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RecordingContext;
  /**
   * create a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RecordingListInstanceCreateOptions, callback?: (error: Error | null, item: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * Streams RecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: RecordingListInstanceEachOptions, callback?: (item: RecordingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a recording
   *
   * @param sid - Fetch by unique recording Sid
   */
  get(sid: string): RecordingContext;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RecordingListInstanceOptions, callback?: (error: Error | null, items: RecordingInstance[]) => any): Promise<RecordingInstance[]>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RecordingListInstancePageOptions, callback?: (error: Error | null, items: RecordingPage) => any): Promise<RecordingPage>;
}

/**
 * Options to pass to create
 *
 * @property recordingChannels - The number of channels that the output recording will be configured with
 * @property recordingStatusCallback - The callback URL for recording actions
 * @property recordingStatusCallbackEvent - The recording status changes that should generate a callback
 * @property recordingStatusCallbackMethod - The HTTP method Twilio should use when making a request to the RecordingStatusCallback URL
 * @property trim - Whether to trim the silence in the recording
 */
interface RecordingListInstanceCreateOptions {
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string[];
  recordingStatusCallbackMethod?: string;
  trim?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface RecordingListInstanceEachOptions {
  callback?: (item: RecordingInstance, done: (err?: Error) => void) => void;
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface RecordingListInstanceOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property dateCreated - Filter by date created
 * @property dateCreatedAfter - Filter by date created
 * @property dateCreatedBefore - Filter by date created
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface RecordingListInstancePageOptions {
  dateCreated?: Date;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingResource {
  account_sid: string;
  api_version: string;
  call_sid: string;
  channels: number;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: string;
  encryption_details: string;
  error_code: number;
  price: number;
  price_unit: string;
  sid: string;
  source: RecordingSource;
  start_time: Date;
  status: RecordingStatus;
  uri: string;
}

interface RecordingSolution {
  accountSid?: string;
  callSid?: string;
}


declare class RecordingContext {
  /**
   * Initialize the RecordingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param callSid - Fetch by unique call Sid for the recording
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: V2010, accountSid: string, callSid: string, sid: string);

  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): Promise<RecordingInstance>;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * update a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RecordingInstanceUpdateOptions, callback?: (error: Error | null, items: RecordingInstance) => any): Promise<RecordingInstance>;
}


declare class RecordingInstance extends SerializableClass {
  /**
   * Initialize the RecordingContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property apiVersion - The version of the API in use during the recording.
   * @property callSid - The unique id for the call leg that corresponds to the recording.
   * @property conferenceSid - The unique id for the conference associated with the recording, if a conference recording.
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property startTime - The start time of the recording, given in RFC 2822 format.
   * @property duration - The length of the recording, in seconds.
   * @property sid - A string that uniquely identifies this recording
   * @property price - The one-time cost of creating this recording.
   * @property uri - The URI for this resource
   * @property encryptionDetails - Details for how to decrypt the recording.
   * @property priceUnit - The currency used in the Price property.
   * @property status - The status of the recording.
   * @property channels - The number of channels in the final recording file as an integer.
   * @property source - The way in which this recording was created.
   * @property errorCode - More information about the recording failure, if Status is failed.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param callSid - The unique id for the call leg that corresponds to the recording.
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: V2010, payload: RecordingPayload, accountSid: string, callSid: string, sid: string);

  private _proxy: RecordingContext;
  accountSid: string;
  apiVersion: string;
  callSid: string;
  channels: number;
  conferenceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  duration: string;
  encryptionDetails: string;
  errorCode: number;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  price: number;
  priceUnit: string;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RecordingInstance) => any): void;
  sid: string;
  source: RecordingSource;
  startTime: Date;
  status: RecordingStatus;
  /**
   * Produce a plain JSON object version of the RecordingInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a RecordingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RecordingInstanceUpdateOptions, callback?: (error: Error | null, items: RecordingInstance) => any): void;
  uri: string;
}


declare class RecordingPage extends Page<V2010, RecordingPayload, RecordingResource, RecordingInstance> {
  /**
   * Initialize the RecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: RecordingSolution);

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListInstance, RecordingListInstanceCreateOptions, RecordingListInstanceEachOptions, RecordingListInstanceOptions, RecordingListInstancePageOptions, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution }
