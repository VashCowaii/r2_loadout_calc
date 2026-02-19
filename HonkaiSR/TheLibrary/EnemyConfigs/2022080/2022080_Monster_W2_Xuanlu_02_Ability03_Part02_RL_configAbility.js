const configAbility = {
  "fileName": "2022080_Monster_W2_Xuanlu_02_Ability03_Part02_RL",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    {
      "name": "Shot Fired"
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_304) || RETURN",
        "displayLines": "UnusedUnderThisBase_304",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_304"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] (UnusedUnderThisBase_305) || RETURN",
        "displayLines": "UnusedUnderThisBase_305",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_305"
        ]
      },
      "valuePerStack": {
        "Modifier_Electric_DamagePercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_303) || RETURN",
          "displayLines": "UnusedUnderThisBase_303",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_303"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "references": []
}