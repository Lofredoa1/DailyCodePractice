//Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

//The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

//The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

const computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let intersectingHeight = Math.min(ay2, by2) - Math.max(ay1, by1);
    let intersectingWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    intersectingHeight = intersectingHeight > 0 ? intersectingHeight : 0;
    intersectingWidth = intersectingWidth > 0 ? intersectingWidth : 0;
    return (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1) -  intersectingHeight*intersectingWidth
};

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2))