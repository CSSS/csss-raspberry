{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = inputs@{ self, nixpkgs, flake-utils, ... }: 
    flake-utils.lib.eachDefaultSystem (system:
    let
        pkgs = nixpkgs.legacyPackages.${system};
        nodePkgs = pkgs.nodejs_18.pkgs;
        nativeBuildInputs = [
          pkgs.nodejs_18
        ];
    in {
        devShells.default = pkgs.mkShell {
            inherit nativeBuildInputs;

            shellHook = ''
              echo "node `node --version`"
              echo "npm `npm --version`"
            '';
        };
    });
}
