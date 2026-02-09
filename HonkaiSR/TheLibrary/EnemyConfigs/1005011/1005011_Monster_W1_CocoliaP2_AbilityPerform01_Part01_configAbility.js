const configAbility = {
  "fileName": "1005011_Monster_W1_CocoliaP2_AbilityPerform01_Part01",
  "childAbilityList": [
    "1005011_Monster_W1_CocoliaP2_AbilityPerform01_Camera",
    "1005011_Monster_W1_CocoliaP2_AbilityPerform01_Part01",
    "1005011_Monster_W1_CocoliaP2_AbilityPerform01_Part02"
  ],
  "skillTrigger": "SkillPerform01",
  "abilityType": "Skill",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1403193826\">EnterBattleRage</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1403193826\">EnterBattleRage</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W1_CocoliaP2_AbilityPerform01_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}