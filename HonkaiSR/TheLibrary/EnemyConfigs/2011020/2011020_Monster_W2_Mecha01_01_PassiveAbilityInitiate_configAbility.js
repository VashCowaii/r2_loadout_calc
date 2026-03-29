const configAbility = {
  "fileName": "2011020_Monster_W2_Mecha01_01_PassiveAbilityInitiate",
  "skillTrigger": "PassiveSkillInitiate",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-588236531\">Enemy_W2_Mecha01_01_StandByLoopEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ]
    }
  ]
}