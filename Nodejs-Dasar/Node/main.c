#include<studio.h>
main()
(
    printf("tes");

    int i,j,n;
    printf("number : ");
    scanf("%d", &n);
    for(i=1; i<=n; i++) {
        for(j=1; j<=n; j++) {
            printf("%d ", j);
        }
        printf("\n")
    }
)