import math

PROCEDURE Dot_product(v1,v2 : ARRAY_OF INTEGER[3], VAR ps:FLOAT)
VAR
    i,j:INTEGER;
BEGIN
   ps:=0;
    FOR i FROM 0 TO v1.length -1 STEP 1  DO
        ps:=ps+v1[i]*v2[i];
    END_FOR
END