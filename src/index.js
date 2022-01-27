


module.exports = function towelSort (matrix) {
  if(matrix)
    return matrix.reduce( (result, array,index) => { 
          
          if(index%2 === 0) {
            return result.concat(array)
            } 
          else return result.concat(array.reverse())
        
          }, []);
  else
    return [];
}
