import json
from pathlib import Path
from typing import Dict, Any

class OutputWriter:
    """
    Handles writing the final output JSON to the specified directory.
    """

    def __init__(self, output_dir: Path):
        """
        Initializes the writer with the target directory where the output will be saved.

        Args:
            output_dir (Path): The Path object pointing to the collection directory.
        """
        self.output_dir = output_dir
        self.output_filename = "challenge1b_output.json"

    def write(self, data: Dict[str, Any]):
        """
        Writes the final data dictionary to the 'challenge1b_output.json' file
        in the specified directory.

        Args:
            data (Dict[str, Any]): The final dictionary to be written as JSON.
        """
        output_path = self.output_dir / self.output_filename

        try:
            with open(output_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4)
        except Exception as e:
            print(f"Error: Could not write output to file at {output_path}.")
            print(f"Reason: {e}")
