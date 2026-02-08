const configAbility = {
  "fileName": "-838314705_StrongChallengeEX_Test_StageAbility_SpeedUp",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2036544920\">Standard_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "duration": 3,
          "valuePerStack": {
            "MDF_PropertyValue": 50
          }
        }
      ]
    }
  ],
  "references": []
}