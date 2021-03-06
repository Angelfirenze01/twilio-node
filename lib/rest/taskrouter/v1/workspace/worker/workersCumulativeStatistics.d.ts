/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the WorkersCumulativeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 */
declare function WorkersCumulativeStatisticsList(version: V1, workspaceSid: string): WorkersCumulativeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by a end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter cumulative statistics by TaskChannel.
 */
interface WorkersCumulativeStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkersCumulativeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkersCumulativeStatisticsContext;
  /**
   * Constructs a workers_cumulative_statistics
   */
  get(): WorkersCumulativeStatisticsContext;
}

interface WorkersCumulativeStatisticsPayload extends WorkersCumulativeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkersCumulativeStatisticsResource {
  account_sid: string;
  activity_durations: string;
  end_time: Date;
  reservations_accepted: number;
  reservations_canceled: number;
  reservations_created: number;
  reservations_rejected: number;
  reservations_rescinded: number;
  reservations_timed_out: number;
  start_time: Date;
  url: string;
  workspace_sid: string;
}

interface WorkersCumulativeStatisticsSolution {
  workspaceSid?: string;
}


declare class WorkersCumulativeStatisticsContext {
  /**
   * Initialize the WorkersCumulativeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, workspaceSid: string);

  /**
   * fetch a WorkersCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkersCumulativeStatisticsInstance) => any): Promise<WorkersCumulativeStatisticsInstance>;
}


declare class WorkersCumulativeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkersCumulativeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property startTime - The start_time
   * @property endTime - The end_time
   * @property activityDurations - The minimum, average, maximum and total time Workers spent in each Activity
   * @property reservationsCreated - The total number of Reservations that were created
   * @property reservationsAccepted - The total number of Reservations that were accepted
   * @property reservationsRejected - The total number of Reservations that were rejected
   * @property reservationsTimedOut - The total number of Reservations that were timed out
   * @property reservationsCanceled - The total number of Reservations that were canceled
   * @property reservationsRescinded - The total number of Reservations that were rescinded
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   */
  constructor(version: V1, payload: WorkersCumulativeStatisticsPayload, workspaceSid: string);

  private _proxy: WorkersCumulativeStatisticsContext;
  accountSid: string;
  activityDurations: string;
  endTime: Date;
  /**
   * fetch a WorkersCumulativeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkersCumulativeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkersCumulativeStatisticsInstance) => any): void;
  reservationsAccepted: number;
  reservationsCanceled: number;
  reservationsCreated: number;
  reservationsRejected: number;
  reservationsRescinded: number;
  reservationsTimedOut: number;
  startTime: Date;
  /**
   * Produce a plain JSON object version of the WorkersCumulativeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
  workspaceSid: string;
}


declare class WorkersCumulativeStatisticsPage extends Page<V1, WorkersCumulativeStatisticsPayload, WorkersCumulativeStatisticsResource, WorkersCumulativeStatisticsInstance> {
  /**
   * Initialize the WorkersCumulativeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkersCumulativeStatisticsSolution);

  /**
   * Build an instance of WorkersCumulativeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkersCumulativeStatisticsPayload): WorkersCumulativeStatisticsInstance;
}

export { WorkersCumulativeStatisticsContext, WorkersCumulativeStatisticsInstance, WorkersCumulativeStatisticsList, WorkersCumulativeStatisticsListInstance, WorkersCumulativeStatisticsPage, WorkersCumulativeStatisticsPayload, WorkersCumulativeStatisticsResource, WorkersCumulativeStatisticsSolution }
