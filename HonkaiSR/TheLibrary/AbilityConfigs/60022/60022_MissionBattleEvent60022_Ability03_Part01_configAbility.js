const configAbility = {
  "fileName": "60022_MissionBattleEvent60022_Ability03_Part01",
  "childAbilityList": [
    "60022_MissionBattleEvent60022_Ability03_Part01",
    "60022_MissionBattleEvent60022_Ability03_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    30,
    0
  ],
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1414979868\">MStageMissionBattleEvent60022</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1414979868\">MStageMissionBattleEvent60022</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "Mydeimos"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-762642255\">MLevel_MissionBattleEvent60022_MydeimosListener</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}