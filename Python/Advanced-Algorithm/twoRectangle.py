# this is to check if two rectangles share the same area and return that area as an rectangle.
# input will be 8 point


def intersection(rec1, rec2):
    rec_result = [0, 0, 0, 0]

    # get point
    minx1 = rec1[0]
    maxx1 = rec1[1]
    miny1 = rec1[2]
    maxy1 = rec1[3]

    minx2 = rec2[0]
    maxx2 = rec2[1]
    miny2 = rec2[2]
    maxy2 = rec2[3]

    if rec1[0] > rec1[1]:
        minx1 = rec1[1]
        maxx1 = rec1[0]

    if rec1[2] > rec1[3]:
        miny1 = rec1[3]
        maxy1 = rec1[2]

    if rec2[0] > rec2[1]:
        minx2 = rec2[1]
        maxx2 = rec2[0]

    if rec2[2] > rec2[3]:
        miny2 = rec2[3]
        maxy2 = rec2[2]

    # check x,y boundary
    if minx1 > maxx2 or maxx1 < minx2 or miny1 > maxy2 or maxy1 < miny2:
        return False

    # get rectangle value
    if minx1 < minx2:
        rec_result[0] = minx2
    else:
        rec_result[0] = minx1

    if maxx1 < maxx2:
        rec_result[1] = maxx1
    else:
        rec_result[1] = maxx2

    if miny1 < miny2:
        rec_result[2] = miny2
    else:
        rec_result[2] = miny1

    if maxy1 < maxy2:
        rec_result[3] = maxy1
    else:
        rec_result[3] = maxy2

    return rec_result


if __name__ == '__main__':
    rec1 = [1, 3, 3, 5]
    rec2 = [3, 4, 5, 6]
    area = intersection(rec1, rec2)
    print(area)
