const configAbility = {
  "fileName": "3003042_Monster_W3_Figure_RLElite_PassiveAbility_02",
  "childAbilityList": [
    "3003042_Monster_W3_Figure_RLElite_PassiveAbility_02"
  ],
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1110187412\">Enemy_W3_Figure_RLElite_SuccessSleep</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}