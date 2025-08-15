# Contents of the file: /simon-portfolio/simon-portfolio/projects/utilities/automation/example.py

import os
import time

def automate_task(task_name):
    print(f"Starting automation for: {task_name}")
    # Simulate task duration
    time.sleep(2)
    print(f"Completed automation for: {task_name}")

if __name__ == "__main__":
    tasks = ["Backup files", "Clean temporary files", "Update software"]
    for task in tasks:
        automate_task(task)