const configAbility = {
  "fileName": "2023031_Monster_XP_Elite02_02_RLElite_Passive01",
  "childAbilityList": [
    "2023031_Monster_XP_Elite02_02_RLElite_Passive01"
  ],
  "skillTrigger": "PassiveSkill01",
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
      "modifier": "OneMorePerTurn"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_Standard_MuteHitFly"
    }
  ],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_XP_Elite02_02_RLElite_PartControl"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_XP_Elite02_02_RLElite_PartControl",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 3
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}