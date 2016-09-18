"use strict";

/**
 * cliSize
 * Get the terminal size.
 *
 * @name cliSize
 * @function
 * @return {Object} An object containing the terminal size.
 */
module.exports = function cliSize () {
    return {
        columns: process.stdout.columns || 80
      , rows: process.stdout.rows || 60
    };
};
