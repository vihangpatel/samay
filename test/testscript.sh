red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`


echo "${yellow}Starting Test cases for samay.js ${reset}"
jasmine spec.js

returnVal=$?

if [ $returnVal == 0 ]
then 
	echo "${yellow}All test cases are successfully passed"
else
	echo "${red}Test cases are failing. Commit is broken"
fi

echo "${reset}"

exit $?