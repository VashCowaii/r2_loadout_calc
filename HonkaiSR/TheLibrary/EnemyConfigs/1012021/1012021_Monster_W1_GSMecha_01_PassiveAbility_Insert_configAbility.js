const configAbility = {
  "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Chains of Destruction"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_BoomTimes",
      "value": 1,
      "max": 1
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill04",
      "passed": [
        "Deleted bullshit",
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Animation Task",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[PassiveSkillInitiate[0]]}"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "{[PassiveSkillInitiate[1]]}"
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}