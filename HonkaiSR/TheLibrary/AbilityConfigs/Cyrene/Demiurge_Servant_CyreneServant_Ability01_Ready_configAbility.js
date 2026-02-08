const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability01_Ready",
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
      "parameters": {
        "_AnimStartNormalizedTime": 0
      },
      "ability": "Servant_CyreneServant_Ability01_VisualPrepare",
      "isTrigger": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"339481432\">Memosprite_CyreneServant_Ability02Disable</a>"
    },
    {
      "name": "Inject Extra-Turn",
      "actionTag": null,
      "abilityName": "Servant_CyreneServant_FormationReset",
      "afterInjection": [],
      "priorityTag": "Character_HighPriorityAction"
    }
  ],
  "references": []
}