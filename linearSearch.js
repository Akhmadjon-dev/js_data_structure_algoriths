// linear search
// there are two main techniques depend on array whether it is sorted or not
// linear search can be implemented both of them

// by using recursion
function findItem(arr, item){
    if(arr.length === 0){
        return false;
    }
    if(arr[0] === item){
        return true;
    }
    return findItem(arr.slice(1), item);
}

// by using loop

function findItemByLoop(arr, item){
    for( let el of arr){
        if(el === item) return true   
    }
    return false;
}

// binary search
// binary search is a search algorithm that works by comparing the target value to the middle element of the sequence.
// If the target value is less than the middle element, then the next half of the sequence is searched.
// If the target value is greater than the middle element, then the other half of the sequence is searched.
// If the target value is equal to the middle element, then the position of the element is returned.
// If the target value is not found, then the function returns -1.

function binarySearch(arr, item){
    let mid = Math.floor(arr.length / 2);
    if(arr[mid] === item){
        return mid;
    }
    if(arr.length === 1){
        return -1;
    }
    if(arr[mid] > item){
        return binarySearch(arr.slice(0, mid), item);
    }
    return binarySearch(arr.slice(mid + 1), item);
}

// binary search with for loop
function binarySearchWithLoop(arr, item){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === item){
            return mid;
        }
        if(arr[mid] > item){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
