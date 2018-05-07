module.exports = {
  spiralCopy: function(arr) {
    var spiralPrint = '';
    var colI = 0;
    var rowI = 0;

    // first while loop iterates until 2d array is empty
    while (arr.length > 0) {

      // print left to right
      while (colI < arr[rowI].length - 1) {
        spiralPrint += arr[rowI][colI] + ' ';
        colI++;
      }

      // print top to bottom
      while (rowI < arr.length - 1) {
        spiralPrint += arr[rowI][colI] + ' '
        arr[rowI].splice(colI, 1) // delete each num as we go from the columns
        rowI++;
      }

      // print right to left
      while (colI > 0) {
        spiralPrint += arr[rowI][colI] + ' ';
        colI--;
      }
      // print top to bottom
      while (rowI > 0) {
        spiralPrint += arr[rowI][colI] + ' ';
        arr[rowI].splice(colI, 1); // delete each num as we go from the columns
        rowI--;
      }
      arr.splice(0, 1) // delete entire first row from the array (already added to spiralPrint) at end of each spiral so keep indexes in correct spots
      arr.splice(arr.length - 1, 1) // delete entire last row from the array (already added to spiralPrint) at end of each spiral so keep indexes in correct spots
    }
    return spiralPrint.trim();
  }
}
