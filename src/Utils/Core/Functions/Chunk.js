/**
 * Chunk array
 * @param {Array<any>} array The array to chunk.
 * @param {number} size The number of data per chunks.
 */
module.exports = function (array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i++) {
    const chunk = array.slice(i, i + size);
    chunks.push(chunk);
  }
  return chunks;
}