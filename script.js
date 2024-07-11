const arr = [1, 2, 3, 4, 1, 0, 2, 2];

	const sum = (arr)=> arr.reduce((a,b)=> a+b,0)
const divide = (arr, n) => {
  // Write your code here
		let result=[];
		let subArr=[];
		arr.forEach((item)=>{
			subArr.push(item);
			if(sum(subArr)>n){
				result.push(subArr.slice(0,-1));
				subArr=[item]
			}
		})
		if(subArr.length >0){
			result.push(subArr);
		}
	
return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
