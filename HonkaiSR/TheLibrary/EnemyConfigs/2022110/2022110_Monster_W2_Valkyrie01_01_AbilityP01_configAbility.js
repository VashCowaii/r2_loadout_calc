const configAbility = {
  "fileName": "2022110_Monster_W2_Valkyrie01_01_AbilityP01",
  "childAbilityList": [
    "2022110_Monster_W2_Valkyrie01_01_AbilityP01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]"
    }
  ],
  "whenAdded": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>[<span class=\"descriptionNumberColor\">Maddened</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Attack changes to Sawing Evil: Sever.",
      "type": "Buff",
      "effectName": "Maddened",
      "statusName": "Maddened"
    }
  ]
}