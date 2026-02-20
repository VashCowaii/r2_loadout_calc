const configAbility = {
  "fileName": "4032027_Monster_W4_FireProwler_01_Main_PassiveAbilityInitiate",
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
            "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
            "displayLines": "{[PassiveSkill01[0]]}",
            "constants": [],
            "variables": [
              "{[PassiveSkill01[0]]}"
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
  "references": []
}