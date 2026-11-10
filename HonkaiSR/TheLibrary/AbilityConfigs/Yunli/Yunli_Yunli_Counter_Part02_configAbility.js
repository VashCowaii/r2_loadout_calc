const configAbility = {
  "fileName": "Yunli_Yunli_Counter_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 0.5,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
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
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.2"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "0.6"
            },
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "OnInsertAbort_Flg2"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}