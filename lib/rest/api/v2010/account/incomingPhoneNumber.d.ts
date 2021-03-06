/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { AssignedAddOnList } from './incomingPhoneNumber/assignedAddOn';
import { AssignedAddOnListInstance } from './incomingPhoneNumber/assignedAddOn';
import { SerializableClass } from '../../../../interfaces';

type IncomingPhoneNumberAddressRequirement = 'none'|'any'|'local'|'foreign';

type IncomingPhoneNumberEmergencyStatus = 'Active'|'Inactive';

type IncomingPhoneNumberVoiceReceiveMode = 'voice'|'fax';

/**
 * @description Initialize the IncomingPhoneNumberList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function IncomingPhoneNumberList(version: V2010, accountSid: string): IncomingPhoneNumberListInstance;

/**
 * Options to pass to update
 *
 * @property accountSid - The new owner of the phone number
 * @property addressSid - Unique string that identifies the address associated with number
 * @property apiVersion - The Twilio REST API version to use
 * @property emergencyAddressSid - EmergencyAddress configuration to leverage emergency calling
 * @property emergencyStatus - Status determining whether the number is enabled for emergency calling
 * @property friendlyName - A human readable description of this resource
 * @property identitySid - Unique string that identifies the identity associated with number
 * @property smsApplicationSid - Unique string that identifies the application
 * @property smsFallbackMethod - HTTP method used with sms fallback url
 * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property smsMethod - HTTP method to use with sms url
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property statusCallback - URL Twilio will use to pass status parameters
 * @property statusCallbackMethod - HTTP method twilio will use with status callback
 * @property trunkSid - Unique string to identify the trunk
 * @property voiceApplicationSid - The unique sid of the application to handle this number
 * @property voiceCallerIdLookup - Look up the caller's caller-ID
 * @property voiceFallbackMethod - HTTP method used with fallback_url
 * @property voiceFallbackUrl - URL Twilio will request when an error occurs in TwiML
 * @property voiceMethod - HTTP method used with the voice url
 * @property voiceReceiveMode - Incoming call type: `fax` or `voice`
 * @property voiceUrl - URL Twilio will request when receiving a call
 */
interface IncomingPhoneNumberInstanceUpdateOptions {
  accountSid?: string;
  addressSid?: string;
  apiVersion?: string;
  emergencyAddressSid?: string;
  emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
  friendlyName?: string;
  identitySid?: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trunkSid?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
  voiceUrl?: string;
}

interface IncomingPhoneNumberListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IncomingPhoneNumberContext;
  /**
   * create a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: IncomingPhoneNumberListInstanceCreateOptions, callback?: (error: Error | null, item: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * Streams IncomingPhoneNumberInstance records from the API.
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
  each(opts?: IncomingPhoneNumberListInstanceEachOptions, callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a incoming_phone_number
   *
   * @param sid - Fetch by unique incoming-phone-number Sid
   */
  get(sid: string): IncomingPhoneNumberContext;
  /**
   * Retrieve a single target page of IncomingPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  /**
   * Lists IncomingPhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IncomingPhoneNumberListInstanceOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance[]) => any): Promise<IncomingPhoneNumberInstance[]>;
  local?: object;
  mobile?: object;
  /**
   * Retrieve a single page of IncomingPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IncomingPhoneNumberListInstancePageOptions, callback?: (error: Error | null, items: IncomingPhoneNumberPage) => any): Promise<IncomingPhoneNumberPage>;
  tollFree?: object;
}

/**
 * Options to pass to create
 *
 * @property addressSid - Unique string that identifies the address associated with number
 * @property apiVersion - The Twilio Rest API version to use
 * @property areaCode - The desired area code for the new number
 * @property emergencyAddressSid - EmergencyAddress configuration to leverage emergency calling
 * @property emergencyStatus - Status determining whether the number is enabled for emergency calling
 * @property friendlyName - A human readable description of this resource
 * @property identitySid - Unique string that identifies the identity associated with number
 * @property phoneNumber - The phone number
 * @property smsApplicationSid - Unique string that identifies the application
 * @property smsFallbackMethod - HTTP method used with sms fallback url
 * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
 * @property smsMethod - HTTP method to use with sms url
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property statusCallback - URL Twilio will use to pass status parameters
 * @property statusCallbackMethod - HTTP method twilio will use with status callback
 * @property trunkSid - Unique string to identify the trunk
 * @property voiceApplicationSid - The unique sid of the application to handle this number
 * @property voiceCallerIdLookup - Look up the caller's caller-ID
 * @property voiceFallbackMethod - HTTP method used with fallback_url
 * @property voiceFallbackUrl - URL Twilio will request when an error occurs in TwiML
 * @property voiceMethod - HTTP method used with the voice url
 * @property voiceReceiveMode - Incoming call type: `fax` or `voice`
 * @property voiceUrl - URL Twilio will request when receiving a call
 */
interface IncomingPhoneNumberListInstanceCreateOptions {
  addressSid?: string;
  apiVersion?: string;
  areaCode?: string;
  emergencyAddressSid?: string;
  emergencyStatus?: IncomingPhoneNumberEmergencyStatus;
  friendlyName?: string;
  identitySid?: string;
  phoneNumber?: string;
  smsApplicationSid?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  trunkSid?: string;
  voiceApplicationSid?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceReceiveMode?: IncomingPhoneNumberVoiceReceiveMode;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property beta - Include new phone numbers
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Filter by friendly name
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on the origin, by default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property phoneNumber - Filter by incoming phone number
 */
interface IncomingPhoneNumberListInstanceEachOptions {
  beta?: boolean;
  callback?: (item: IncomingPhoneNumberInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to list
 *
 * @property beta - Include new phone numbers
 * @property friendlyName - Filter by friendly name
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property origin - Include phone numbers based on the origin, by default, phone numbers of all origin are included.
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property phoneNumber - Filter by incoming phone number
 */
interface IncomingPhoneNumberListInstanceOptions {
  beta?: boolean;
  friendlyName?: string;
  limit?: number;
  origin?: string;
  pageSize?: number;
  phoneNumber?: string;
}

/**
 * Options to pass to page
 *
 * @property beta - Include new phone numbers
 * @property friendlyName - Filter by friendly name
 * @property origin - Include phone numbers based on the origin, by default, phone numbers of all origin are included.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property phoneNumber - Filter by incoming phone number
 */
interface IncomingPhoneNumberListInstancePageOptions {
  beta?: boolean;
  friendlyName?: string;
  origin?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  phoneNumber?: string;
}

interface IncomingPhoneNumberPayload extends IncomingPhoneNumberResource, Page.TwilioResponsePayload {
}

interface IncomingPhoneNumberResource {
  account_sid: string;
  address_requirements: IncomingPhoneNumberAddressRequirement;
  address_sid: string;
  api_version: string;
  beta: boolean;
  capabilities: string;
  date_created: Date;
  date_updated: Date;
  emergency_address_sid: string;
  emergency_status: IncomingPhoneNumberEmergencyStatus;
  friendly_name: string;
  identity_sid: string;
  origin: string;
  phone_number: string;
  sid: string;
  sms_application_sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  trunk_sid: string;
  uri: string;
  voice_application_sid: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface IncomingPhoneNumberSolution {
  accountSid?: string;
}


declare class IncomingPhoneNumberContext {
  /**
   * Initialize the IncomingPhoneNumberContext
   *
   * @property assignedAddOns - assignedAddOns resource
   *
   * @param version - Version of the resource
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique incoming-phone-number Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  assignedAddOns: AssignedAddOnListInstance;
  /**
   * fetch a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
  /**
   * remove a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): void;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IncomingPhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): Promise<IncomingPhoneNumberInstance>;
}


declare class IncomingPhoneNumberInstance extends SerializableClass {
  /**
   * Initialize the IncomingPhoneNumberContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property addressSid - Unique string that identifies the address associated with number
   * @property addressRequirements - Indicates if the customer requires an address
   * @property apiVersion - The Twilio REST API version to use
   * @property beta - Indicates if the phone number is a beta number
   * @property capabilities - Indicate if a phone can receive calls or messages
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description of this resouce
   * @property identitySid - Unique string that identifies the identity associated with number
   * @property phoneNumber - The incoming phone number
   * @property origin - Twilio owned phone numbers are marked as twilio while hosted phone numbers are marked as hosted.
   * @property sid - A string that uniquely identifies this resource
   * @property smsApplicationSid - Unique string that identifies the application
   * @property smsFallbackMethod - HTTP method used with sms fallback url
   * @property smsFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
   * @property smsMethod - HTTP method to use with sms url
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property statusCallback - URL Twilio will use to pass status parameters
   * @property statusCallbackMethod - HTTP method twilio will use with status callback
   * @property trunkSid - Unique string to identify the trunk
   * @property uri - The URI for this resource
   * @property voiceApplicationSid - The unique sid of the application to handle this number
   * @property voiceCallerIdLookup - Look up the caller's caller-ID
   * @property voiceFallbackMethod - HTTP method used with fallback_url
   * @property voiceFallbackUrl - URL Twilio will request when an error occurs in TwiML
   * @property voiceMethod - HTTP method used with the voice url
   * @property voiceUrl - URL Twilio will request when receiving a call
   * @property emergencyStatus - The emergency_status
   * @property emergencyAddressSid - The emergency_address_sid
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique incoming-phone-number Sid
   */
  constructor(version: V2010, payload: IncomingPhoneNumberPayload, accountSid: string, sid: string);

  private _proxy: IncomingPhoneNumberContext;
  accountSid: string;
  addressRequirements: IncomingPhoneNumberAddressRequirement;
  addressSid: string;
  apiVersion: string;
  /**
   * Access the assignedAddOns
   */
  assignedAddOns(): AssignedAddOnListInstance;
  beta: boolean;
  capabilities: string;
  dateCreated: Date;
  dateUpdated: Date;
  emergencyAddressSid: string;
  emergencyStatus: IncomingPhoneNumberEmergencyStatus;
  /**
   * fetch a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): void;
  friendlyName: string;
  identitySid: string;
  origin: string;
  phoneNumber: string;
  /**
   * remove a IncomingPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): void;
  sid: string;
  smsApplicationSid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Produce a plain JSON object version of the IncomingPhoneNumberInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  trunkSid: string;
  /**
   * update a IncomingPhoneNumberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IncomingPhoneNumberInstanceUpdateOptions, callback?: (error: Error | null, items: IncomingPhoneNumberInstance) => any): void;
  uri: string;
  voiceApplicationSid: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class IncomingPhoneNumberPage extends Page<V2010, IncomingPhoneNumberPayload, IncomingPhoneNumberResource, IncomingPhoneNumberInstance> {
  /**
   * Initialize the IncomingPhoneNumberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: IncomingPhoneNumberSolution);

  /**
   * Build an instance of IncomingPhoneNumberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IncomingPhoneNumberPayload): IncomingPhoneNumberInstance;
}

export { IncomingPhoneNumberContext, IncomingPhoneNumberInstance, IncomingPhoneNumberList, IncomingPhoneNumberListInstance, IncomingPhoneNumberListInstanceCreateOptions, IncomingPhoneNumberListInstanceEachOptions, IncomingPhoneNumberListInstanceOptions, IncomingPhoneNumberListInstancePageOptions, IncomingPhoneNumberPage, IncomingPhoneNumberPayload, IncomingPhoneNumberResource, IncomingPhoneNumberSolution }
