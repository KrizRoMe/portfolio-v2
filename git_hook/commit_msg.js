import fs from 'node:fs';
import path from 'node:path';

/**
 * Main function to validate the commit message.
 * 1. Read the commit message from the file.
 * 2. Validate the commit message.
 * 3. Print the result.
 */
function main() {
	const commitMessageFilePath = path.join('.git', 'COMMIT_EDITMSG');

	if (!fs.existsSync(commitMessageFilePath)) {
		console.log('Commit message file does not exist.');
		process.exit(1);
	}

	const commitMessage = fs.readFileSync(commitMessageFilePath, 'utf8').trim();

	if (!isValidCommitMessage(commitMessage)) {
		console.log('👎 Invalid commit message format.');
		console.log(
			'Commit message should follow the Conventional Commits format.',
		);
		process.exit(1);
	}

	console.log('👍 Valid commit message!');
	process.exit(0);
}

/**
 * Validates the commit message against the Conventional Commits format.
 * @param {string} commitMessage - The commit message to validate.
 * @returns {boolean} - True if the commit message is valid, false otherwise.
 */
function isValidCommitMessage(commitMessage) {
	const pattern = /^(feat|fix|docs|chore)(\(.+\))?: .+/;
	return pattern.test(commitMessage);
}

main();
