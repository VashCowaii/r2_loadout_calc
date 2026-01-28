const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability02_Ready",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Servant_CyreneServant_Ability02_VisualPrepare",
      "isTrigger": true
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "skillType": "ControlSkill02",
      "abilityName": "Servant_CyreneServant_FormationReset",
      "afterInjection": [],
      "priorityTag": "Character_HighPriorityAction"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "TutorialSwitch",
        "compareType": "=",
        "value2": 1
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value1": "TutorialSwitch",
            "compareType": "=",
            "value2": 2
          }
        }
      ]
    }
  ],
  "references": []
}