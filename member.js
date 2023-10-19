function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'SkillsMemberController',
        controlleras: 'vm',
        bindToControler: true,
        scope: {
            member: '='
        }
    };
}