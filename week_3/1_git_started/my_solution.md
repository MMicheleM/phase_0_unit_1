## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
	Adds your new file(s) to the snapshot that a commit takes. Does NOT add new files.

#### branch
	Creates a branch of a repo that is your very own copy. For use primarily, I believe, when working with other folks.

#### checkout
	Allows you to move to a particular directory and "check it out" (as in look around, not as in borrow a library book)

#### clone
	Makes a copy of git repo. Usually used when you want a copy of someone else's repo but aren't trying to collaborate on the contents therein.

#### commit
	Snapshot of your local repo at that point in time. Gives you a point to rollback/revert to if needed/wanted. 

#### fetch
	To download new branches and data from a remote repo - it syncs you with another repo. 

#### log
	Applies a filter to your commit history which allows you to compare branches as well as to look for specific commits.

#### merge
	Allows you to merge your branch back into the master file.

#### pull
	You use it to - well, pull - any changes made to the master file down to your local file. It's like a fetch followed by a merge.

#### push
	You use push to - well, push - changes you've made to your local file up to the file on GitHub (or any other such remote repo you are using)

#### reset
	You can use this to unstage a file so that you can make separate commits (git reset HEAD) or you can use it to undo your last commit and put the file(s) back in a staged situation (git reset --soft) There is also the option to unstage files AND undo any changes in the working directory since last commit but I suspect you'd seldom truly want to use that option (git reset --hard HEAD)

#### rm
	Removes entries from your staging area - essentially a delete. To retain you'd want to reset rather than rm.

#### status
	Lets you check the status of your repo to see what files are in there, which changes still need to be committed and what branch of the repo you're workin on.

## Release 4: Git Workflow

- Push files to a remote repository
		git push [alias] [branch]

- Fetch changes
		git fetch [alias]

- Commit locally
		git add

## Release 5: Reflection
	This was a bit confusing to set up - in large part I suspect due to the fact that I'd been using the desktop app for the last two weeks. It's not the concepts that are elusive just some of the semantics and syntax. I'm thrilled to be working from the command line though. Totally enjoy the practice and it makes me feel like I'm more savvy than I really am.
