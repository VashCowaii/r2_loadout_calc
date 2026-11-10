const configAbility = {
  "fileName": "Bronya_Bronya_Eidolon4_ATK",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-109336730\">Bronya_Eidolon4_ATK_Flag</a>"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": 1,
      "assignState": "True",
      "priorState": "CoolDown",
      "bar#": 3,
      "cooldown": 1
    },
    {
      "name": "UI Display Event",
      "popUpText": "Take by Surprise"
    },
    "Deleted bullshit",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "(1 * 0.8)"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}