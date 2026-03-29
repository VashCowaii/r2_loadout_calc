const configAbility = {
  "fileName": "4034020_Monster_W4_FireProwler_01_Main_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2021392801\">Enemy_W4_FireProwler_01_Main_Status</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Enemy Phainon}}"
        }
      },
      "passed": [
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (UnusedUnderThisBase_492) || RETURN",
            "displayLines": "UnusedUnderThisBase_492",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_492"
            ]
          },
          "consumeFloor": 1,
          "attackType": "Unknown",
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "Physical"
          }
        }
      ]
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}