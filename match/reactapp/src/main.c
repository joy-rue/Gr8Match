#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    printf("The beginning of the program\n");
    int counter = 0;
    pid_t pid = fork();

    if (pid == 0) {
        for (int i = 0; i < 6; i++) {
            printf("Child process counter: %d\n", counter++);
        }
    } else if (pid > 0) {
        for (int i = 0; i < 6; i++) {
            printf("Parent process counter: %d\n", counter++);
        }
        // Wait for the child process to finish
        wait(NULL);
    } else {
        perror("Process creation failed");
        return 1;  // Indicate failure to the caller
    }

    printf("End of program\n");
    return 0;
}

#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    printf("The beginning of the program\n");
    int counter = 0;
    pid_t pid = fork();

    if (pid == 0) {
        for (int i = 0; i < 6; i++) {
            printf("Child process counter: %d\n", counter++);
        }
    } else if (pid > 0) {
        for (int i = 0; i < 6; i++) {
            printf("Parent process counter: %d\n", counter++);
        }
        // Wait for the child process to finish
        wait(NULL);
    } else {
        perror("Process creation failed");
        return 1;  // Indicate failure to the caller
    }

    printf("End of program\n");
    return 0;
}
