/**
 * @template {keyof import("discord.js").ClientEvents} T
 */
class ClientEventBuilder {
  /**
   * @param {import("../../Typings/Events/TEventType").TClientEventType<T>} data
   */
  constructor(data) {
    Object.assign(this, data);
  }
}

/**
 * @template {keyof import("discord.js").RestEvents} T
 */
class RestEventBuilder {
  /**
   * @param {import("../../Typings/Events/TEventType").TClientRestEventType<T>} data
   */
  constructor(data) {
    Object.assign(this, data);
  }
}

module.exports = {
  ClientEventBuilder,
  RestEventBuilder,
};
